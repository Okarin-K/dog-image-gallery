/**
 * Dog API から犬の画像を取得する
 *
 * https://dog.ceo/dog-api/
 * @param breed 犬の種別
 */
export async function fetchDogImages(breed: string): Promise<string[]> {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/12`
    );

    const data: GetDogImageResponse = await response.json();

    return data.message;
}

/**
 * Dog API の取得レスポンス
 */
type GetDogImageResponse = {
    /**
     * URL
     * messageというkeyで中身はURL
     */
    message: string[];

    /**
     * レスポンスステータス
     */
    status: string;
};
