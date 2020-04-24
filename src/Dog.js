const getDog = () => {
    return (
        fetch('https://random.dog/woof.json')
        .then(resp => resp.json())
    )
}

export default {getDog}