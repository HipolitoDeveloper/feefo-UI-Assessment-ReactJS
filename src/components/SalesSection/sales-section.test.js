import {render} from "@testing-library/react";
import SalesSection from "./index";

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

test("render exact number of uploads", () => {
    const { getByText, container} = render(
        <SalesSection
            {...accountOverviewStub.salesOverview}
            styleProps={{h: '100%', margin: '0 0 5px 0', bgColor: 'white'}}/>
    );
    const numberOfUploads = getByText(/5 uploads/);
    const percentage = container.querySelector("div div span b");
    expect(numberOfUploads).toBeInTheDocument();
    expect(percentage.innerHTML).toEqual("5 uploads");
});

test("render exact number of lines", () => {
    const { container} = render(
        <SalesSection
            {...accountOverviewStub.salesOverview}
            styleProps={{h: '100%', margin: '0 0 5px 0', bgColor: 'white'}}/>
    );
    const percentage = container.querySelector("div div span #lines");
    expect(percentage.innerHTML).toEqual("15");
});
