import React from 'react';

export function FormApp(props: FormProps) {
    return (
        <div className="container mt-3">
            <select
                name="breed"
                className="form-select form-select-lg mb-3"
                onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                    props.onFormSubmit(e.currentTarget.value)
                }
            >
                <option value="shiba">柴犬</option>
                <option value="akita">秋田県</option>
                <option value="beagle">ビーグル</option>
            </select>
        </div>
    );
}

type FormProps = {
    readonly onFormSubmit: (breed: string) => void;
};
