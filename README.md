# management-authors  
  
## Overview  
  
Google Formの送信をトリガーとして, 実行されるGoogle Apps Scriptのコードです.  
Googleアカウントとペンネームを受け取り, その人との作業用の共有フォルダを作成し, メールを送信します.  
  
## Functions  
  
各関数ファイルの説明.  
  
| name | description |
| -- | -- |
| drive.ts | Google Driveに関する処理(フォルダ作成, 編集者追加)を実行する. | 
| event.ts | イベント(フォーム送信)時の入力値を取得する. |
| mail.ts | Gmailに関する処理(メール送信)を実行する. |
| main.ts | メイン関数. |
| spreadsheet.ts | Google Spreadsheetから設定値を取得する処理を実行する. |  
  
また, typeディレクトリ配下の各ファイルに関しては, 以下の通り.  
  
| name | description |
| -- | -- |
| env.ts | 環境変数を保持するEnvObjTypeを宣言. |
| event.ts | イベント時の入力値を保持するEventObjTypeを宣言. |
| spreadsheet.ts | Google Spreadsheetから取得した設定値を保持するSheetObjTypeを宣言. |  
  
## Variables  
  
### Enviromnent Variables  
  
環境変数は, 以下の通り.  
  
| name | type | description |
| --- | --- | --- |
| FORM_ITEMS | object | フォームから送信される変数に関するもの |
| MAIL_BODY | string | 送信するメールのテンプレート |
| SHEET_KEYS_COLUMN | string | Google Spreadsheetの列の内, 項目名(key)を含む列. |
| SHEET_KEYS_NAME | object | シートに記載する項目名に関するもの |
| SHEET_NAME | string | シート名 |
| SHEET_VALUES_COLUMN | string | Google Spreadsheetの列の内, 設定値(value)を含む列. |  
  
### Form Items  
  
Google Formから取得する値は以下の通り.  
  
| name | description |
| --- | --- |
| Googleアカウント | Gmailアドレスを入力. |
| ペンネーム | 紙面上で使用するペンネームを入力. |

  
### Sheet Variables  
  
Google Spreadsheetに記載する値について記載する.  
各環境により変更する, あるいは変更したいシーンがままあるものに関しては, SpreadSheetの「環境変数」シートに記載し, スクリプトはそこから設定値を取得し, 利用する.  
なお当スクリプト利用時は, 項目名はA列に, 設定値はB列に記載するものとし, ヘッダーが必須であるものとする.  
  
| name (A column) | description |
| --- | --- |
| メールアドレス | 管理者のメールアドレス. メール送信時にCcに入る. |
| フォルダーID | フォルダ作成時に親フォルダとしたいフォルダのID. |
| メールタイトル | メール送信時のタイトル. |
| メール送信者名 | メール送信時に使用する送信者の名前. |  
  
## Note  
  
Need: clasp
  
## License  
  
MIT  
  
## Author  
  
mench.