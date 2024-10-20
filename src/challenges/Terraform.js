import { useState } from 'react';

export default function Terraform () {
    const fetchFunction = async () => {
        const newData = await fetch("http://54.204.168.16:8000/")
        const json = await newData.json()
        setFetchedData(json)
    }
    const [fetchedData, setFetchedData] = useState()
    fetchFunction()
    return (
        <div>
            <h1>Challenge:</h1>
            <h3>Using newly-found Terraform and Infrastructure knowledge, fetch data from a running AWS EC2 instance and display it below</h3>
            <div>

                <p>data here eventually</p>
                { 
                    fetchedData &&
                    JSON.stringify(fetchedData)
                }
            </div>
        </div>
)
}