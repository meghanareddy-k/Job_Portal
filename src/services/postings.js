export function fetchAllPostings() {
    return fetch('/api/postings' , {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'networkError'}))
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }))
        .then( err => Promise.reject(err)) 
    });
}


export function fetchRecruiterPostings() {
    return fetch('/api/posting' , {
        method: 'GET',
    })
    .catch( () => Promise.reject({ error: 'networkError'}))
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }))
        .then( err => Promise.reject(err)) 
    });
}


export function fetchAddPosting({posting}) {
    return fetch('/api/postings' , {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({posting}),
    })
    .catch( () => Promise.reject({ error: 'networkError'}))
    .then( response => {
        if (response.ok) {
            return response.json();
        }
        return response.json()
        .catch( error => Promise.reject({ error }))
        .then( err => Promise.reject(err)) 
    });
}




