import icon from '../assets/images/peacock_flat.png';

function PagesHeader() {
    return (
        <>
            <div className="tw-w-full tw-text-white tw-h-full tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-h-full tw-items-center">
                    <img className='tw-max-h-[70%] tw-mr-[.1rem] tw-aspect-square' src={icon} alt='icon' />
                    <h1 className='tw-font-bold tw-text-[.1rem]'>Freecode Website</h1>
                </div>
                <nav></nav>
            </div>
        </>
    )
}

export default PagesHeader;