export const InvoiceList = () => {

    const cars = [
        {number: 'InvoiceList', model: 'InvoiceList'},
        {number: 'InvoiceList', model: 'InvoiceList'},
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