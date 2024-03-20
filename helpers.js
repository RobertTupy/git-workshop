function getRandomDate() {
    const end = new Date();
    end.setFullYear(end.getFullYear() - 18);

    const start = new Date();
    start.setFullYear(start.getFullYear() - 48);

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const example = [].map(name => ({
    name: name,
    birthday: getRandomDate().toISOString()
}))
