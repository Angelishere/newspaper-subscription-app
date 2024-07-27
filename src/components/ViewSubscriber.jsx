import React from 'react'
import NavBar from './NavBar'

const ViewSubscriber = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Subscriber Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Village Office</th>
                                    <th scope="col">Email ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <th scope="row">John Doe</th>
                                    <td>123-456-7890</td>
                                    <td>123 Main St, Apt 4B</td>
                                    <td>12345</td>
                                    <td>Springfield</td>
                                    <td>Springfield Village Office</td>
                                    <td>john.doe@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Jane Smith</th>
                                    <td>987-654-3210</td>
                                    <td>456 Elm St, Suite 1A</td>
                                    <td>67890</td>
                                    <td>Shelbyville</td>
                                    <td>Shelbyville Village Office</td>
                                    <td>jane.smith@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bob Johnson</th>
                                    <td>555-123-4567</td>
                                    <td>789 Oak St, Unit 2C</td>
                                    <td>54321</td>
                                    <td>Capital City</td>
                                    <td>Capital City Village Office</td>
                                    <td>bob.johnson@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Alice Brown</th>
                                    <td>321-654-0987</td>
                                    <td>101 Pine St, Apt 5D</td>
                                    <td>67891</td>
                                    <td>Centerville</td>
                                    <td>Centerville Village Office</td>
                                    <td>alice.brown@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Charlie Davis</th>
                                    <td>654-987-3210</td>
                                    <td>202 Birch St, Suite 2B</td>
                                    <td>12346</td>
                                    <td>Rivertown</td>
                                    <td>Rivertown Village Office</td>
                                    <td>charlie.davis@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Emily Wilson</th>
                                    <td>789-123-4560</td>
                                    <td>303 Cedar St, Unit 1A</td>
                                    <td>54322</td>
                                    <td>Lakewood</td>
                                    <td>Lakewood Village Office</td>
                                    <td>emily.wilson@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Frank Moore</th>
                                    <td>432-567-8901</td>
                                    <td>404 Maple St, Apt 3C</td>
                                    <td>67892</td>
                                    <td>Hilltop</td>
                                    <td>Hilltop Village Office</td>
                                    <td>frank.moore@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Grace Lee</th>
                                    <td>567-890-1234</td>
                                    <td>505 Willow St, Suite 4D</td>
                                    <td>12347</td>
                                    <td>Riverbend</td>
                                    <td>Riverbend Village Office</td>
                                    <td>grace.lee@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Henry White</th>
                                    <td>678-123-4567</td>
                                    <td>606 Cherry St, Unit 5B</td>
                                    <td>54323</td>
                                    <td>Greenfield</td>
                                    <td>Greenfield Village Office</td>
                                    <td>henry.white@example.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Isabella Taylor</th>
                                    <td>789-456-1230</td>
                                    <td>707 Fir St, Apt 6A</td>
                                    <td>67893</td>
                                    <td>Brookside</td>
                                    <td>Brookside Village Office</td>
                                    <td>isabella.taylor@example.com</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewSubscriber