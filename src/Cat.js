const getCat = () => {
    return (
        fetch('https://aws.random.cat/meow')
        .then(resp => resp.json())
    )
}

export default {getCat}