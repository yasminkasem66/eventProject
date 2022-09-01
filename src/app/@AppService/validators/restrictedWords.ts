import { FormControl, ValidationErrors } from "@angular/forms"

export function restrictedWords(words: any) {
    return (x: FormControl): ValidationErrors |  null => {
        if (!words) return null;
        let invalidWords = words.map((w: any) => x.value.includes(w) ? w : null)
            .filter((w: any) => w != null)
        return invalidWords && invalidWords.length > 0 ? { restrictedWord: invalidWords.join(',') } : null
    }
}