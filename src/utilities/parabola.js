function polynomial(...coefficients) {
    return x => {
        coefficients.reduceRight((result, coefficient, index, array) =>
            result + coefficient * Math.pow(x, array.length - index - 1))
    }
}

function sample(start, end, numberOfPoints, f) {
    const step = Math.abs(end - start) / numberOfPoints;
    let x = start + step;
    let points = [f(start)];
    for (let i = 0; i < numberOfPoints - 1; i++) {
        points.push(f(x));
        x += step;
    }
    return points.concat(f(end));
}
