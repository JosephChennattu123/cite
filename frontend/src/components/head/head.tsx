import { Helmet } from 'react-helmet-async';

type HeadProps = {
    title?: string;
    description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
    return (
        <Helmet
            title={title ? `${title} | My Portfolio` : undefined}
            defaultTitle="My Portfolio"
        >
            <meta name="description" content={description} />
        </Helmet>
    );
};
