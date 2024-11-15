import React from 'react';
import image1 from '../../assets/image1.PNG';
import image2 from '../../assets/image2.PNG';
import image3 from '../../assets/image3.JPG';

const RecentPost = () => {
    return (
        <>
            <section class="bg-pink-200">
                <div class="py-1 sm:py-8 block relative bg-opacity-50">
                    <div class="flex justify-between items-center mx-auto px-4  sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

                        <div class="flex items-center">
                            <h6 class="text-black text-md font-serif">Recent Posts</h6>
                        </div>

                        <div class="text-right">
                            <a href='wwww.shanujyadav@gmail.com' class="text-pink-600 text-sm font-serif">View all</a>
                        </div>
                    </div>

                    <div class="relative mx-auto px-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

                        <div class="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-3 lg:mt-10 z-0">
                            <div class="relative w-full h-full py-2 px-9">
                                <img src={image1} alt="Full Image" class="w-full h-full object-cover" />
                            </div>
                            <div class="relative w-full h-full py-2 px-9">
                                <img src={image2} alt="Full Image" class="w-full h-full object-cover" />
                            </div>
                            <div class="relative w-full h-full py-2 px-9">
                                <img src={image3} alt="Full Image" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecentPost