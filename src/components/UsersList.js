import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UsersList = ({ users, onDeleteUser }) => {
    return (
        <ListGroup>
            {users.sort((a, b) => {
                if (a.firtName > b.firtName) {
                    return 1;
                } else if (a.firtName < b.firtName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else if (a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            }).map(user => (
                <ListGroupItem key={user.id}>
                    <section style={{ display: "flex" }}>
                        <div style={{ flexGrow: 1 }}>
                            {user.firtName} {user.lastName}
                        </div>
                        <div>
                            <Button outline color="danger" onClick={() => onDeleteUser(user.id)}>
                                Delete
                            </Button>
                        </div>
                    </section>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default UsersList;