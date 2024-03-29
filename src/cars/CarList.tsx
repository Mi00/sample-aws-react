export const CarList = () => {

    const cars = [
        {number: 'ZS 12312', model: 'Scania 420'},
        {number: 'ZS 56767', model: 'Scania 500'},
    ]

    const tableRow = (car: Car) => (
        <tr key={car.number}>
            <td>{car.number}</td>
            <td>{car.model}</td>
        </tr>
    )

    return (
        <table>
            <thead>
                <tr>
                    <th>Car number</th>
                    <th>Car model</th>
                </tr>
            </thead>
            <tbody>
                {cars.map(car => tableRow(car))}
            </tbody>
        </table>
    )
}

export interface Car {
    number: string
    model: string
}