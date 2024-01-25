
export function fetchMyApplications() {
    return fetch('/api/applications' , {
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




export function fetchAddApplication({postingId , postedBy}) {
    return fetch('/api/applications' , {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({postingId, postedBy}),
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


export function fetchWithdrawApplication({postingId , postedBy}) {
    return fetch('/api/withdraw' , {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({postingId, postedBy}),
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