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
const SHEET_KEYS_NAME: object = {
    address: "Googleアカウント",
    parent_folder_id: "フォルダーID",
    sender_name: "メール送信者名",
    subject: "メールタイトル",
};
const SHEET_KEYS_COLUMN = "A";
const SHEET_VALUES_COLUMN = "B";
const SHEET_NAME = "環境変数";
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

    try {

        const value: EnvObjType = {
            form_items: FORM_ITEMS,
            mail_body: MAIL_BODY,
            sheet_keys_column: SHEET_KEYS_COLUMN,
            sheet_keys_name: SHEET_KEYS_NAME,
            sheet_name: SHEET_NAME,
            sheet_values_column: SHEET_VALUES_COLUMN,
        };

        return value;

    } catch (error) {

        throw new Error(error);

    }
}
