type GalleryProps = {
    readonly urls: string[];
};

/**
 * 犬の画像を表示する
 */
export function Gallery(props: GalleryProps) {
    if (props.urls.length === 0) {
        return <Loading />;
    }

    return (
        <div>
            {props.urls.map((url, index) => {
                return <img src={url} alt={'dog' + index.toString()} />;
            })}
        </div>
    );
}

/**
 * ローディング画面
 */
function Loading() {
    return (
        <div className="loading">
            <div className="spinner-border" role="status"></div>
            <p>Loading...</p>
        </div>
    );
}
