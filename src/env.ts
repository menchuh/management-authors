// ===========================================================
// import packages
// ===========================================================
import EnvObjType from "./type/env";

// ===========================================================
// declare variables
// ===========================================================
const FORM_ITEMS: object = {
    address: "Googleアカウント",
    name: "ペンネーム",
};
const SHEET_COLUMNS: object = {
    address: "Googleアカウント",
    parent_folder_id: "フォルダーID",
};
const SHEET_NAME = "環境変数";
const MAIL_TITLE = "ライター登録完了";
const MAIL_BODY = `$name様

ライター登録が完了しました。
フォルダ名「$name」で、フォルダ用の共有フォルダを作成いたしました。原稿等はそちらにアップロードをお願いいたします。
なおフォルダには「共有アイテム」からアクセスいただけます。
（別途、共同編集への招待メールが送信されているかと思います。）

登録情報：
Googleアカウント: $address
ペンネーム: $name`;

// ===========================================================
// return environment variables object
// ===========================================================
export default function getEnv(): EnvObjType {

    const value: EnvObjType = {
        form_items: FORM_ITEMS,
        mail_body: MAIL_BODY,
        mail_title: MAIL_TITLE,
        sheet_columns: SHEET_COLUMNS,
        sheet_name: SHEET_NAME,
    };

    return value;
}
