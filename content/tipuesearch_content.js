var tipuesearch = {"pages": [{'title': 'Home', 'text': '組員: \n (1)學號:40923115 帳號: jason60714 ip:\xa0 [2001:288:6004:17:2023:cdb:5:1]:23020 \n (2)學號:40923130 帳號:Martin3130  [2001:288:6004:17:2023:cdb:5:2]:23020 \n (3) 學號: 40923235  帳號: 40923235\xa0\xa0 [2001:288:6004:17:2023:cdb:5:3]:23020 \n (4) 學號: 41023202  帳號: ting0111  [2001:288:6004:17:2023:cdb:5:4]:23020/ \n (5) 學號: 41023212  帳號: youqui0411 [2001:288:6004:17:2023:cdb:5:5]:23020 \n (6) 學號: 41023229  帳號: CHI1020\xa0\xa0\xa0  [2001:288:6004:17:2023:cdb:5:6]:23020 \n (7) 學號: 41023242  帳號: 41023242\xa0   [2001:288:6004:17:2023:cdb:5:7]:23020 \n (8) 學號: 41023252  帳號: ZYC0923\xa0\xa0\xa0  [2001:288:6004:17:2023:cdb:5:8]:23020 \n 倉儲: \n \xa0 \xa0 \xa0\xa0   https://github.com/mdecd2023/2b3-pj3bg5 \n 網站： \n \xa0 \xa0 \xa0\xa0  https://mdecd2023.github.io/2b3-pj3bg5/content/index.html \n \n \xa0', 'tags': '', 'url': 'Home.html'}, {'title': 'group', 'text': '\n 亂數 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  亂數 開始  \n \n \n  亂數 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n \n', 'tags': '', 'url': 'group.html'}, {'title': '場地', 'text': '場地 \n \n', 'tags': '', 'url': '場地.html'}, {'title': '記分板', 'text': '', 'tags': '', 'url': '記分板.html'}, {'title': '機器人', 'text': '41023202 \n 41023202組合 \n \n 41023212 \n 41023212組合.zip \n \n 41023229 \n 41023229機械人 \n \n 41023242 \n 41023242機械人 \n \n 41023252 \n 41023252機械人 \n \n 40923130 \n 40923130機器人 \n \n 40923115 \n 40923115 機器人 \n \n 40923235 \n 40923235 機器人 \n \n \n 機器人影片 \n 瓦利機器人 \n \n', 'tags': '', 'url': '機器人.html'}, {'title': '協同設計', 'text': '球場 \n 影片 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': '協同設計.html'}, {'title': '分配工作', 'text': '40923130:更改joint與輪子名稱，修改wali程式碼 \n 41023202:詢問許多同學步驟，首先先製作足球機器人。我是先用solidworks畫出機器人的本體，按照規格所要求的畫。之後再把檔案存成stl檔。接著畫出輪子(含輪框)、軸各為一份檔案。也是存成stl檔案。接著字畫出場地，按照尺寸設計以及需求，也是存成stl檔案。 \n 41023229:負責畫機器人和裝機器人的軸作動跟畫記分板。 \n 41023242:負責主持會議、錄製影片、交代任務，尋找可能會發生哪些問題並盡快提早解決，在5/23、5/24這兩天中找出我們畫的機器人可能有哪些問題 \n 41023252:負責將機器人裝上轉軸作動，解決cmd及網站倉儲問題。 \n', 'tags': '', 'url': '分配工作.html'}, {'title': '會議記錄', 'text': '5/23開會目的:各自設計一個球員 \n \n \n 5/24開會目的:將設計好的球員加上輪子匯入CoppeliaSim嘗試 \n \n \n \n \n \n 5月31日:把各自的機器人做修改並上傳，我們把場地跟球框重畫了，之前是場地球框分開畫，現在我們畫在一起這樣在協同的過程中比較方便進行，最後有讓我們的機器人裝上軸並試著走走看 \n', 'tags': '', 'url': '會議記錄.html'}, {'title': 'Wali程式碼', 'text': "# pip install pyzmq cbor keyboard\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n#from zmqRemoteApi import RemoteAPIClient\nimport keyboard\n\n#client = RemoteAPIClient('localhost', 23000)\nclient = RemoteAPIClient('2001:288:6004:17:2023:cdb:5:2', 23000)\n\nprint('Program started')\nsim = client.getObject('sim')\n\nsim.startSimulation()\nprint('Simulation started')\n\ndef setWaliRobVelocity(leftWheelVelocity, rightWheelVelocity):\n    leftMotor1 = sim.getObject('/leftMotor1')\n    leftMotor2 = sim.getObject('/leftMotor2')\n    rightMotor1 = sim.getObject('/rightMotor1')\n    rightMotor2 = sim.getObject('/rightMotor2')\n    sim.setJointTargetVelocity(leftMotor1, leftWheelVelocity)\n    sim.setJointTargetVelocity(leftMotor2, leftWheelVelocity)\n    sim.setJointTargetVelocity(rightMotor1, rightWheelVelocity)\n    sim.setJointTargetVelocity(rightMotor2, rightWheelVelocity)\n    \n'''\n# Example usage 1:\nsetBubbleRobVelocity(1.0, 1.0)\ntime.sleep(2)\nsetBubbleRobVelocity(0.0, 0.0)\n'''\n# use keyborad to move BubbleRob\n\nwhile True:\n    if keyboard.is_pressed('5'):\n        setWaliRobVelocity(3.0, 3.0)\n    elif keyboard.is_pressed('8'):\n        setWaliRobVelocity(-3.0, -3.0)\n    elif keyboard.is_pressed('6'):\n        setWaliRobVelocity(-3.0, 3.0)\n    elif keyboard.is_pressed('4'):\n        setWaliRobVelocity(3.0, -3.0)\n    elif keyboard.is_pressed('q'):\n        # stop simulation\n        sim.stopSimulation()\n    else:\n        setWaliRobVelocity(0.0, 0.0)\n\n\n \n \n 利用紅綠球控制之程式碼修改成Wali的程式碼", 'tags': '', 'url': 'Wali程式碼.html'}]};