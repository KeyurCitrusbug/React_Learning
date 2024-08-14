export default function DynamicRoutesDetails({ params }: { params: { dynamicID: string } }) {
    return (
        <h1>Example of Dynamic routes when no params are params pass:- {params.dynamicID}</h1>
    );
}
