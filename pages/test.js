export default function test() {
    return (
        <div className='h-screen flex w-screen'>
        <video
            autoPlay
            loop
            muted
        >
            <source src='/arezo.mp4' type='video/mp4' />
                Your browser does not support the video tag.
        </video>
        </div>
    )
}