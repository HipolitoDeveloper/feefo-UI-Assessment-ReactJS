import { render } from "@testing-library/react";

import Header from "./";

const accountOverviewStub = {
    supportContact: {
        name: "John Smith",
        email: "john.smith@feefo.com",
    },
    salesOverview: {
        uploads:5,
        successfulUploads: 2,
        linesAttempted: 15,
        linesSaved: 4,
    },
};

test("render header contact info", () => {
    const { getByText } = render(
        <Header {...accountOverviewStub.supportContact} />
    );
    const headerField = getByText(/Account Overview/i);
    expect(headerField).toBeTruthy();
});

test("show contact info", () => {
    const { getByText } = render(
        <Header
            {...{name: "Feefo", email: "feefo@email.com"}}
        />
    );
    const headerField = getByText(/YOUR FEEFO SUPPORT CONTACT/i);
    const name = getByText('Feefo');
    const email = getByText('feefo@email.com');
    expect(headerField).toBeInTheDocument();
    expect(name).toBeTruthy();
    expect(email).toBeInTheDocument();
});
