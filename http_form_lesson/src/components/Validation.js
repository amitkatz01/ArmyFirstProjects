// Outsourcing Validation Logic

export function isEmail(value) {
    return (
        value.includes('@')
    );
};

export function isNotEmpty(value) {
    return (
        value.trim() !== ''
    );
};

export function hasMinLength(value, minLength) {
    return (
        value.minLength >= minLength
    );
};

export function isEqualToOtherValue(val1, val2) {
    return (
        val1 === val2
    );
};