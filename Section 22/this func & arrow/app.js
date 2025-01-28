const person = {
    firstName: 'Vegeta',
    lastName: 'Prince',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
};