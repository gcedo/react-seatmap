export function polynomial(...coefficients) {
    return x =>
        coefficients.reduceRight((result, coefficient, index, array) =>
             result + coefficient * Math.pow(x, array.length - index - 1), 0)
}

export function sample(start, end, numberOfPoints, f) {
    const step = 1 //Math.abs(end - start) / numberOfPoints;
    let x = start + step;
    let points = [f(start)];
    for (let i = 0; i < numberOfPoints - 1; i++) {
        points.push(f(x));
        x += step;
    }
    return points.concat(f(end));
}

export default function computeOffsets(numberOfPoints, f) {
    return sample(
        -(numberOfPoints - 1) / 2,
        (numberOfPoints - 1) / 2,
        numberOfPoints,
        f
    )
}
