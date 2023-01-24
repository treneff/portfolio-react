const SocialItem = (props) => {
    return (
        <li>
            <a href={props.link}title="Link to Social MediaF" target='_blank' rel='noopener noreferrer'>
                {props.children}
            </a>
        </li>
    );
};

export default SocialItem;
