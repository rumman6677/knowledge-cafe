import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-400 p-4 m-4 rounded-xl">
            <h3 className="2xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object,
    readingTime : PropTypes.number
}

export default Bookmark;
