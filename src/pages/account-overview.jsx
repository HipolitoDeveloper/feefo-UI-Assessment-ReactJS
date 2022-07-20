import React from 'react';
import * as S from "./account-overview.styles";
import * as CommunS from "../styles/shared.styles"

import Header from "../components/Header";
import {number, shape, string} from "prop-types";
import Card from "../components/Card";
import PercentageSection from "../components/PercentageSection";
import SalesSection from "../components/SalesSection";

export const AccountOverview = ({data}) => {
    console.log(data);

    return (
        <CommunS.Wrapper bgColor='#F4F4F4'>
            <S.AccountWrapper>
                <Header {...data.supportContact}/>
                <Card styleProps={{h: '120px',  bgColor: '#F4F4F4'}}>
                    <SalesSection
                        {...data.salesOverview}
                        styleProps={{h: '100%', margin: '0 0 5px 0', bgColor: 'white'}}/>
                    <CommunS.Wrapper>
                        <PercentageSection
                            percentage={data.salesOverview.successfulUploads}
                            description={'UPLOAD SUCCESS'}
                            styleProps={{h: '100%', margin: '0 5px 0 0', bgColor: 'white'}}/>
                        <PercentageSection
                            percentage={data.salesOverview.linesSaved}

                            description={'LINES SAVED'}
                            styleProps={{h: '100%', margin: '0', bgColor: 'white'}}/>
                    </CommunS.Wrapper>
                </Card>
            </S.AccountWrapper>
        </CommunS.Wrapper>
    )
}

AccountOverview.propTypes = {
    supportContact: shape({
        name: string,
        email: string,
    }),
    salesOverview: shape({
        uploads: number,
        successfulUploads: number,
        linesAttempted: number,
        linesSaved: number,
    }),
};

AccountOverview.defaultProps = {
    data: {
        supportContact: {
            name: '',
            email: '',
        },
        salesOverview: {
            uploads: 0,
            successfulUploads: 0,
            linesAttempted: 0,
            linesSaved: 0,
        },
    }
};

export default AccountOverview;
