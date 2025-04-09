import Cloudflare from '../assets/icon/cloudflare.svg';
import more from '../assets/icon/more.svg';

function PagesContent() {
    return (
        <>
            <section className="tw-h-full tw-w-full tw-flex tw-justify-center tw-items-center">
                <div className="tw-w-1/2 tw-h-1/2 tw-rounded-sm tw-bg-[rgba(255,255,255,.51)] tw-p-[.2rem]">
                    <p className="tw-text-center tw-text-[.15rem] tw-h-[.2rem]">Project</p>
                    <div className="tw-w-full tw-h-[calc(100% - .2rem)] tw-flex tw-flex-wrap">
                        <div className="tw-flex tw-w-[.5rem] tw-h-[.5rem] tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-sm tw-mr-1">
                            <img className='tw-w-[70%] tw-aspect-square' src={Cloudflare} alt='图标' />
                            <p>CDN服务</p>
                        </div>
                        <div className="tw-flex tw-w-[.5rem] tw-justify-center tw-h-[.5rem] tw-flex-col tw-items-center tw-bg-white tw-rounded-sm tw-mr-1">
                            <img className='tw-w-[70%] tw-aspect-square' src={more} alt='图标' />
                            <p>更多</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PagesContent;