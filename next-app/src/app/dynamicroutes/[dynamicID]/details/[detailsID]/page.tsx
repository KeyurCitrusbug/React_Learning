export default function DynamicRoutesDetails({ params }: { params: { dynamicID: string,detailsID:string } }) {
    return (
        <h1>Example of Dynamic routes when no params are params pass:- {params.dynamicID} and secondID:- {params.detailsID}</h1>
    );
}
