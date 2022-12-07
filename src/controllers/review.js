import models from "../models";
import { successResponse, errorResponse, handleError } from "../utils/responses";

/**
 * @class ReviewController
 * @description create, log in user
 * @exports ReviewController
 */
export default class ReviewController {
  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async createReview(req, res) {
    try {
      const {
        name, email, phone, description, cv
      } = req.body;
      const detailsExist = await models.Reviews.findOne({ where: { email } });
      if (detailsExist) {
        return errorResponse(res, 409, "Details exist");
      }
      const details = await models.Reviews.create({
        name, email, phone, description
      });
      await details.update({ cv: req.file.path });
      await details.save();
      return successResponse(res, 201, "CV will be reviewed and sent to your mail", details);
    } catch (error) {
      handleError(error, req);
      return errorResponse(res, 500, "Server error.");
    }
  }
}
