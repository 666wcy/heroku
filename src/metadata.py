import datetime
import json
import os
import re
import time
import io
import sys
from bs4 import BeautifulSoup
import googleapiclient
import requests

import src.drivetools


def parseMovie(name):
    # (2008) Iron Man.mkv
    reg_1 = r"^[\(\[\{](?P<year>\d{4})[\)\]\}]\s(?P<title>[^.]+).*(?P<extention>\..*)?$"
    # Iron Man (2008).mkv
    reg_2 = r"^(?P<title>.*)\s[\(\[\{](?P<year>\d{4})[\)\]\}].*(?P<extention>\..*)?$"
    # Iron.Man.2008.1080p.WEBRip.DDP5.1.Atmos.x264.mkv
    reg_3 = r"^(?P<title>(?:(?!\.\d{4}).)*)\.(?P<year>\d{4}).*(?P<extention>\..*)?$"
    reg_4 = r"^(?P<year>)(?P<title>.*).*(?P<extention>\..*?$)"  # Iron Man.mkv
    if re.match(reg_1, name):
        match = re.search(reg_1, name)
    elif re.match(reg_2, name):
        match = re.search(reg_2, name)
    elif re.match(reg_3, name):
        match = re.search(reg_3, name)
        return match["title"].replace(".", " "), match["year"]
    elif re.match(reg_4, name):
        match = re.search(reg_4, name)
    else:
        return
    return match["title"], match["year"]


def parseTV(name):
    # (2019) The Mandalorian
    reg_1 = r"^[\(\[\{](?P<year>\d{4})[\)\]\}]\s(?P<title>[^.]+).*$"
    # The Mandalorian (2019)
    reg_2 = r"^(?P<title>.*)\s[\(\[\{](?P<year>\d{4})[\)\]\}].*$"
    # The.Mandalorian.2019.1080p.WEBRip
    reg_3 = r"^(?P<title>(?:(?!\.\d{4}).)*)\.(?P<year>\d{4}).*$"
    reg_4 = r"^(?P<year>)(?P<title>.*)$"  # The Mandalorian
    if re.match(reg_1, name):
        match = re.search(reg_1, name)
    elif re.match(reg_2, name):
        match = re.search(reg_2, name)
    elif re.match(reg_3, name):
        match = re.search(reg_3, name)
        return match["title"].replace(".", " "), match["year"]
    elif re.match(reg_4, name):
        match = re.search(reg_4, name)
    else:
        return
    return match["title"], match["year"]


def read_nfo():
    with open("tvshow.nfo", "r",encoding='utf-8') as f:  # 打开文件
        data = f.read()  # 读取文件
        print(data)
        soup = BeautifulSoup(data, 'html.parser')
        f.close()

    #标题
    print(soup.title.string)
    try:
        title=soup.title.string
    except:
        None

    #简介
    print(soup.plot.string)
    try:
        overview=soup.plot.string
    except:
        overview = None

    #横幅
    print(soup.thumb.string)
    try:
        backdropPath=soup.thumb.string
    except:
        backdropPath = None

    #海报
    print(soup.find_all(name='thumb',attrs={"aspect":"poster"})[0].string)
    try:
        posterPath=soup.find_all(name='thumb',attrs={"aspect":"poster"})[0].string
    except:
        posterPath = None

    #年份
    print(soup.year.string)
    try:
        releaseDate=soup.year.string
    except:
        releaseDate = "1970-01-01"

    popularity = 0.0

    #评分 voteAverage
    print(soup.rating.string)
    try:
        voteAverage = soup.rating.string
    except:
        voteAverage = 0.0

    return (
        title,
        posterPath,
        backdropPath,
        releaseDate,
        overview,
        popularity,
        voteAverage,
    )


def mediaIdentifier(
        tmdb_api_key, title, year, backdrop_base_url, poster_base_url, movie=False, tv=False
):
    if movie:
        search_url = (
                "https://api.themoviedb.org/3/search/movie?api_key=%s&query=%s&year=%s&language=zh-CN"
                % (tmdb_api_key, title, year)
        )
        search_content = json.loads((requests.get(search_url)).content)
        print(search_content)
        sys.stdout.flush()
        try:
            title = search_content["results"][0]["title"]
        except:
            pass
        try:
            posterPath = poster_base_url + search_content["results"][0]["poster_path"]
        except:
            posterPath = None
        try:
            backdropPath = (
                    backdrop_base_url + search_content["results"][0]["backdrop_path"]
            )
        except:
            backdropPath = None
        try:
            releaseDate = search_content["results"][0]["release_date"]
        except:
            releaseDate = "%s-01-01" % (year)
        try:
            overview = search_content["results"][0]["overview"]
        except:
            overview = None
        try:
            popularity = search_content["results"][0]["popularity"]
        except:
            popularity = 0.0
        try:
            voteAverage = search_content["results"][0]["vote_average"]
        except:
            voteAverage = 0.0
        return (
            title,
            posterPath,
            backdropPath,
            releaseDate,
            overview,
            popularity,
            voteAverage,
        )
    elif tv:
        search_url = (
                "https://api.themoviedb.org/3/search/tv?api_key=%s&query=%s&first_air_date_year=%s&language=zh-CN"
                % (tmdb_api_key, title, year)
        )
        search_content = json.loads((requests.get(search_url)).content)
        try:
            title = search_content["results"][0]["name"]
            print(f"TV名称{title}")
            sys.stdout.flush()
        except:
            pass
        try:
            posterPath = poster_base_url + search_content["results"][0]["poster_path"]
        except:
            posterPath = None
        try:
            backdropPath = (
                    backdrop_base_url + search_content["results"][0]["backdrop_path"]
            )
        except:
            backdropPath = None
        try:
            releaseDate = search_content["results"][0]["first_air_date"]
        except:
            releaseDate = "%s-01-01" % (year)
        try:
            overview = search_content["results"][0]["overview"]
        except:
            overview = None
        try:
            popularity = search_content["results"][0]["popularity"]
        except:
            popularity = 0.0
        try:
            voteAverage = search_content["results"][0]["vote_average"]
        except:
            voteAverage = 0.0

        return (
            title,
            posterPath,
            backdropPath,
            releaseDate,
            overview,
            popularity,
            voteAverage,
        )


def readMetadata(config):
    if os.path.exists("./metadata.json"):
        with open("./metadata.json", "r") as r:
            metadata = json.load(r)
    else:
        metadata = []
        for category in config["category_list"]:
            tmp = {
                "kind": "drive#file",
                "id": "",
                "name": "",
                "mimeType": "application/vnd.google-apps.folder",
                "teamDriveId": "",
                "driveId": "",
                "type": "directory",
                "children": [],
                "categoryInfo": category,
                "length": 0,
                "buildTime": str(
                    datetime.datetime.utcnow()
                    - datetime.timedelta(minutes=config["build_interval"] + 1)
                ),
            }
            metadata.append(tmp)
    return metadata





def writeMetadata(config, drive):
    configuration_url = "https://api.themoviedb.org/3/configuration?api_key=%s" % (
        config["tmdb_api_key"]
    )
    configuration_content = json.loads(requests.get(configuration_url).content)
    backdrop_base_url = (
            configuration_content["images"]["secure_base_url"]
            + configuration_content["images"]["backdrop_sizes"][3]
    )
    poster_base_url = (
            configuration_content["images"]["secure_base_url"]
            + configuration_content["images"]["poster_sizes"][3]
    )

    placeholder_metadata = []
    count = 0
    for category in config["category_list"]:
        count += 1
        start_time = datetime.datetime.utcnow()
        print(
            "\033[91mBUILDING METADATA FOR CATEGORY %s/%s (%s)...\033[0m"
            % (count, len(config["category_list"]), category["name"])
        )
        if category["type"] == "Movies":
            root = (
                drive.files()
                    .get(fileId=category["id"], supportsAllDrives=True)
                    .execute()
            )
            tree = root
            tree["type"] = "directory"
            tree["children"] = []
            tmp_metadata = src.drivetools.driveWalk(root, drive, root, "video")
            tmp_metadata["categoryInfo"] = category
            tmp_metadata["length"] = len(tmp_metadata["children"])
            tmp_metadata["buildTime"] = str(datetime.datetime.utcnow())
            for item in tmp_metadata["children"]:
                if item["type"] == "file":
                    try:
                        title, year = parseMovie(item["name"])
                        (
                            item["title"],
                            item["posterPath"],
                            item["backdropPath"],
                            item["releaseDate"],
                            item["overview"],
                            item["popularity"],
                            item["voteAverage"],
                        ) = mediaIdentifier(
                            config["tmdb_api_key"],
                            title,
                            year,
                            backdrop_base_url,
                            poster_base_url,
                            True,
                            False,
                        )
                    except:
                        (
                            item["title"],
                            item["posterPath"],
                            item["backdropPath"],
                            item["releaseDate"],
                            item["overview"],
                            item["popularity"],
                            item["voteAverage"],
                        ) = (item["name"], None, None, "1900-01-01", None, 0.0, 0.0)

            placeholder_metadata.append(tmp_metadata)

        #TV分类
        elif category["type"] == "TV Shows":
            #获取文件夹信息
            root = (
                drive.files()
                    .get(fileId=category["id"], supportsAllDrives=True)
                    .execute()
            )
            print(root)
            sys.stdout.flush()
            if root["mimeType"] == "application/vnd.google-apps.folder":
                root["type"] = "directory"
                root["children"] = []
                for item in src.drivetools.driveIter(root, drive, "video"):
                    print(item)
                    sys.stdout.flush()
                    if root["mimeType"] == "application/vnd.google-apps.folder":
                        item["type"] = "directory"
                        root["children"].append(item)
                    else:
                        root["type"] = "file"
                        root["children"].append(item)
            tmp_metadata = root
            tmp_metadata["categoryInfo"] = category
            tmp_metadata["length"] = len(tmp_metadata["children"])
            tmp_metadata["buildTime"] = str(datetime.datetime.utcnow())
            print(tmp_metadata["children"])
            print("开始循环")
            sys.stdout.flush()
            for item in tmp_metadata["children"]:
                if item["type"] == "directory":
                    temp_id=item["id"]
                    print(f"文件夹ID:{temp_id}")
                    sys.stdout.flush()
                #获取子文件夹信息,获取列表
                    params = {
                        "pageToken": None,
                        "supportsAllDrives": True,
                        "includeItemsFromAllDrives": True,
                        "q": "'%s' in parents and trashed = false"
                             % (temp_id),
                        "orderBy": "name",
                    }
                    nfo_key=0
                    while True:
                        response = drive.files().list(**params).execute()
                        for file in response["files"]:
                            #print(f"测试子文件夹 {file}")
                            #tvshow.nfo
                            if file['name']=="tvshow.nfo":
                                nfo_key=1
                                nfo_id=file['id']

                        try:
                            params["pageToken"] = response["nextPageToken"]
                        except KeyError:
                            break

                    try:
                        #下载
                        if nfo_key==1:
                            print("本地nfo文件存在")
                            sys.stdout.flush()
                            request = drive.files().get_media(fileId=nfo_id)
                            fh = io.BytesIO()
                            downloader = googleapiclient.http.MediaIoBaseDownload(fh, request)
                            while True:
                                try:
                                    download_progress, done = downloader.next_chunk()
                                except Exception as e:
                                    print(f'An error occurred: {e}')
                                    sys.stdout.flush()
                                    break
                                if download_progress:
                                    print ('Download Progress: %d%%' % int(download_progress.progress() * 100))
                                    sys.stdout.flush()
                                if done:
                                    print ('Download Complete')
                                    sys.stdout.flush()
                                    with open("tvshow.nfo","w",encoding='utf-8') as f:
                                        f.write(fh.getvalue())
                                        f.close()
                                    break


                            r = os.popen('ls').read()

                            print(r)
                            sys.stdout.flush()
                            (
                                item["title"],
                                item["posterPath"],
                                item["backdropPath"],
                                item["releaseDate"],
                                item["overview"],
                                item["popularity"],
                                item["voteAverage"],
                            )=read_nfo()
                            '''try:
                                os.remove("tvshow.nfo")
                            except Exception as e:
                                print(f"tvshow {e}")
                                sys.stdout.flush()'''

                        else:
                            title, year = parseTV(item["name"])
                            (
                                item["title"],
                                item["posterPath"],
                                item["backdropPath"],
                                item["releaseDate"],
                                item["overview"],
                                item["popularity"],
                                item["voteAverage"],
                            ) = mediaIdentifier(
                                config["tmdb_api_key"],
                                title,
                                year,
                                backdrop_base_url,
                                poster_base_url,
                                False,
                                True,
                            )
                    except:
                        (
                            item["title"],
                            item["posterPath"],
                            item["backdropPath"],
                            item["releaseDate"],
                            item["overview"],
                            item["popularity"],
                            item["voteAverage"],
                        ) = (item["name"], None, None, "1900-01-01", None, 0.0, 0.0)

            placeholder_metadata.append(tmp_metadata)
        print("DONE IN %s.\n" % (str(datetime.datetime.utcnow() - start_time)))

        metadata = placeholder_metadata

        if os.path.exists("./metadata"):
            pass
        else:
            os.mkdir("./metadata")
        with open("./metadata.json", "w+") as w:
            w.write(json.dumps(metadata))

    if os.getenv("LIBDRIVE_CLOUD"):
        config, drive = src.credentials.refreshCredentials(config)
        params = {
            "supportsAllDrives": True,
            "includeItemsFromAllDrives": True,
            "fields": "files(id,name)",
            "q": "'%s' in parents and trashed = false and mimeType = 'application/json'"
                 % (os.getenv("LIBDRIVE_CLOUD")),
        }
        files = drive.files().list(**params).execute()["files"]
        metadata_file = next((i for i in files if i["name"] == "metadata.json"), None)
        file_metadata = {
            "name": "metadata.json",
            "mimeType": "application/json",
            "parents": [os.getenv("LIBDRIVE_CLOUD")],
        }
        media = googleapiclient.http.MediaFileUpload(
            "./metadata.json", mimetype="application/json", resumable=True
        )
        if metadata_file:
            params = {"fileId": metadata_file["id"], "media_body": media}
            drive.files().update(**params).execute()
        else:
            drive.files().create(body=file_metadata, media_body=media).execute()
    return metadata


def jsonExtract(obj=list(), key="", getObj=True):
    arr = []
    arr2 = []

    def extract(obj, arr, key):
        if isinstance(obj, dict):
            for k, v in obj.items():
                if isinstance(v, (dict, list)):
                    extract(v, arr, key)
                elif k == key:
                    arr.append(v)
                    arr2.append(obj)
        elif isinstance(obj, list):
            for item in obj:
                extract(item, arr, key)
        return arr, arr2

    values, values2 = extract(obj, arr, key)
    if getObj == True:
        return values2
    else:
        return values

