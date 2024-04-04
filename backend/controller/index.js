const Banner = require("../model/Banner");
const { uploadImageToCloudinary, deleteImageFromCloudinary } = require("../helper/helper");
const HouseElevations = require("../model/HouseElevations");

exports.addBanner = async (req, res) => {
    try {
        const banner = req.files.banner;
        const { current } = req.body;
        const mediaType = banner.mimetype.split("/")[0]

        if (!banner) {
            return res.status(500).json({
                success: false,
                message: "Image is required",
            })
        }

        const thumbnailImage = await uploadImageToCloudinary(
            banner,
            process.env.FOLDER_NAME
        )
        console.log(thumbnailImage)

        const record = await Banner.create({
            imageUrl: thumbnailImage.secure_url,
            current: current ? current : false,
            isDelete: false,
            isImage: mediaType == "image" ? true : false
        })

        return res.status(200).json({
            success: true,
            message: "Banner Added Successfully",
            data: record
        })

    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: "Interval Server error",
            error: error.message
        })
    }
}

exports.getBanners = async (req, res) => {
    try {

        const banners = await Banner.find({ isDelete: false });

        return res.status(200).json({
            success: true,
            message: "Banners fetched Successfully",
            data: banners
        })


    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: "Interval Server error",
            error: error.message
        })
    }
}

exports.deleteBanner = async (req, res) => {
    try {

        const { id } = req.body; // Assuming the banner ID is passed in the URL params
        const banner = await Banner.findById(id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found",
            });
        }

        const imageDeleted = await deleteImageFromCloudinary(banner.imageUrl);
        console.log('imageDeleted: ', imageDeleted);
        const result = await Banner.findByIdAndUpdate(id, { isDelete: true });
        console.log('result: ', result);

        return res.status(200).json({
            success: true,
            message: "Banner deleted successfully",
        });

    } catch (error) {
        console.log('error: ', error);
    }
}
 

exports.addTrendingHouse = async (req, res) => {
    try {
        const banner = req.files.banner;
        const { label, area, type } = req.body;

        if (!banner) {
            return res.status(500).json({
                success: false,
                message: "Image is required",
            })
        }
        const thumbnailImage = await uploadImageToCloudinary(banner, process.env.FOLDER_NAME);
        console.log('thumbnailImage: ', thumbnailImage);

        const trendingHouse = await HouseElevations.create({
            imageUrl: thumbnailImage.secure_url,
            label: label,
            area: area,
            type: type,
            isDelete: false
        })

        if (trendingHouse) {
            return res.status(200).json({
                success: true,
                message: "House Added Successfully",
                data: trendingHouse
            })
        }

    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: []
        })
    }
}

exports.getTrendingHouse = async (req, res) => {
    try {
        const { type } = req.body;
        const houses = await HouseElevations.find({ isDelete: false, type: type });

        return res.status(200).json({
            success: true,
            message: "Trending Houses Fetched Successfully",
            data: houses
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: []
        })
    }
}

exports.deleteTrendingHouse = async (req,res) => {
    try {
    const { id } = req.body; // Assuming the banner ID is passed in the URL params
        const banner = await HouseElevations.findById(id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found",
            });
        }

        const imageDeleted = await deleteImageFromCloudinary(banner.imageUrl);
        console.log('imageDeleted: ', imageDeleted);
        const result = await HouseElevations.findByIdAndDelete(id);
        console.log('result: ', result);

        return res.status(200).json({
            success: true,
            message: "Banner deleted successfully",
        });

    } catch (error) {
        console.log('error: ', error);
    }
}
 
// exports.addHouseElevation = async (req, res) => {
//     try {
//         const banner = req.files.banner;
//         const { label, area } = req.body;

//         if (!banner) {
//             return res.status(500).json({
//                 success: false,
//                 message: "Image is required",
//             })
//         }
//         const thumbnailImage = await uploadImageToCloudinary(banner, process.env.FOLDER_NAME);

//         const trendingHouse = await HouseElevations.create({
//             imageUrl: thumbnailImage.secure_url,
//             label: label,
//             area: area,
//             isDelete: false,
//             type: "HouseElevation"
//         })

//         if (trendingHouse) {
//             return res.status(200).json({
//                 success: true,
//                 message: "House Added Successfully",
//                 data: trendingHouse
//             })
//         }

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             data: []
//         })
//     }
// }

// exports.getHouseElevation = async (req, res) => {
//     try {
//         const houses = await HouseElevations.find({ isDelete: false, type: "HouseElevation" });

//         return res.status(200).json({
//             success: true,
//             message: "Trending Houses Fetched Successfully",
//             data: houses
//         })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             data: []
//         })
//     }
// }