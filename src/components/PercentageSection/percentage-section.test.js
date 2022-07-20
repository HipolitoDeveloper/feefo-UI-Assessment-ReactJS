import {render} from "@testing-library/react";
import PercentageSection from "./percentage-section";

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

test("render exact number of successful uploads percentage", () => {
    const { getByText, container } = render(
        <PercentageSection
            percentage={accountOverviewStub.salesOverview.successfulUploads}
            description={'UPLOAD SUCCESS'}
            styleProps={{h: '100%', margin: '0 5px 0 0', bgColor: 'white'}}
        />
    );
    const uploads = getByText(/UPLOAD SUCCESS/);
    const percentage = container.querySelector("div b");
    expect(uploads).toBeInTheDocument();
    expect(percentage.innerHTML).toEqual("2%");
});

test("render exact number of lines savedd", () => {
    const { getByText, container } = render(
        <PercentageSection
            percentage={accountOverviewStub.salesOverview.linesSaved}
            description={'LINES SAVED'}
            styleProps={{h: '100%', margin: '0', bgColor: 'white'}}
        />
    );
    const uploads = getByText(/LINES SAVED/);
    const percentage = container.querySelector("div b");
    expect(uploads).toBeInTheDocument();
    expect(percentage.innerHTML).toEqual("4%");
});
