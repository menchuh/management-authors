import FormObjType from "../type/form";

export default class EnvClass {
    // ===========================
    // Google Form member
    // ===========================
    private _form_items: FormObjType = {
        address: "Googleアカウント",
        name: "ペンネーム",
    };
    // ===========================
    // Google Spreadsheet member
    // ===========================
    private _sheet_keys_column: string = "A";
    private _sheet_values_column: string = "B";
    private _sheet_name: string = "環境変数";
    private _sheet_keys_name: object = {
        address: "Googleアカウント",
        line_notify_token: "LINE_TOKEN",
        parent_folder_id: "フォルダーID",
        sender_name: "メール送信者名",
        subject: "メールタイトル",
    };
    // ===========================
    // Gmail member
    // ===========================
    private _mail_body: string = `$name様

    ライター登録が完了しました。
    フォルダ名「$name」で、フォルダ用の共有フォルダを作成いたしました。原稿等はそちらにアップロードをお願いいたします。
    なおフォルダには「共有アイテム」からアクセスいただけます。
    （別途、共同編集への招待メールが送信されているかと思います。）

    登録情報：
    Googleアカウント: $address
    ペンネーム: $name`;
    // ===========================
    // LINE Notify member
    // ===========================
    private _line_notify_url: string = "https://notify-api.line.me/api/notify";
    private _line_message: string = "$nameさんとの共有フォルダを作成しました";

    // ===========================
    // Google Form getter
    // ===========================
    get form_items(): FormObjType {
        return this._form_items;
    }

    // ===========================
    // Spread sheet getter
    // ===========================
    get sheet_keys_column(): string {
        return this._sheet_keys_column;
    }

    get sheet_values_column(): string {
        return this._sheet_values_column;
    }

    get sheet_name(): string {
        return this._sheet_name;
    }

    get sheet_keys_name(): object {
        return this._sheet_keys_name;
    }
    // ===========================
    // Gmail getter
    // ===========================
    get mail_body(): string {
        return this._mail_body;
    }

    // ===========================
    // LINE Notify getter
    // ===========================
    get line_notify_url(): string {
        return this._line_notify_url;
    }

    get line_message(): string {
        return this._line_message;
    }

}
