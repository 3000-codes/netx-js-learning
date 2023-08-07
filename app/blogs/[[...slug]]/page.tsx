export default function Page({params}: {params: {slug: string}}){
    return <div>Page@{params.slug}</div>
}