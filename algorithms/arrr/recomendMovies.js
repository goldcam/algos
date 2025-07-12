function recommendMovies(userHistory, popularMovies, unpopularMovies) {
    // TODO: implement the method to recommend movies.
    const res = [], nonRec = new Set([...userHistory, ...unpopularMovies]);

    for(let movie of popularMovies) {
        if(!nonRec.has(movie)) res.push(movie);
    }


    return res;
}

// Example usage:
const userHistory = [1, 2, 3, 4, 5];
const popularMovies = [1, 2, 3, 6, 7, 8, 9, 10];
const unpopularMovies = [4, 5, 11];
console.log(recommendMovies(userHistory, popularMovies, unpopularMovies)); // Should print: [6, 7, 8, 9, 10]