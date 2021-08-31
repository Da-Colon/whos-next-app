import classnames from "classnames";
import { IFormikProps } from "../interfaces";

const NameAndPrivacy = ({
  handleChange,
  setFieldValue,
  values,
}: IFormikProps) => {
  return (
    <div className="name-and-settings">
      <label htmlFor="isPrivate" className="heading-label">
        List name
      </label>
      <input
        type="text"
        name="name"
        placeholder="List Name..."
        onChange={handleChange}
        value={values.name}
      />
      {/* Privacy Buttons */}
      <div role="group" className="privacy">
        <label htmlFor="isPrivate" className="heading-label">
          List Privacy
        </label>
        <div className="privacy-button-container">
          <button
            type="button"
            name="isPrivate"
            className={classnames({
              "button-highlight": values.isPrivate,
            })}
            onClick={() => setFieldValue("isPrivate", true)}
          >
            Private
          </button>
          <button
            type="button"
            name="isPrivate"
            className={classnames({
              "button-highlight": !values.isPrivate,
            })}
            onClick={() => setFieldValue("isPrivate", false)}
          >
            Public
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameAndPrivacy;
