export interface Url {
    id: string;
    originalUrl: string;
    shortenedUrl: string;
}

export interface ShortenFormProps {
    onSubmit: (url: string) => void;
}