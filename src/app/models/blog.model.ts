export class BlogModel {
    _title: string;
    _image: string;
    _text: string;
    _tags: string[];

    constructor(title: string, image: string, text: string, tags: string[]) {
        this._title = title;
        this._image = image;
        this._text = text;
        this._tags = tags;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get text(): string {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }

    get tags(): string[] {
        return this._tags;
    }

    set tags(tags: string[]) {
        this._tags = tags;
    }
}