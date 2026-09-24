async function callApi(name: string) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(name + " completed"), 1000);
    });
}

async function main() {
    console.log(await callApi("API 1"));
    console.log(await callApi("API 2"));
    console.log(await callApi("API 3"));
}

main();
