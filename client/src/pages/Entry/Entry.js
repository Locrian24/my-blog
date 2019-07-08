import React from 'react';
import { Link } from 'react-router-dom';
import PrivateLink from '../../components/PrivateLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faEdit } from '@fortawesome/free-solid-svg-icons';

import AJAX from '../../utils/ajax';

import './Entry.scss';

class Entry extends React.Component {
    state = {
        entry: null
    };

    componentDidMount() {
        this.loadEntry();
    }

    loadEntry = () => {
        const entryId = this.props.match.params.entryId;
        AJAX.getEntryById(entryId)
            .then(res => this.setState({ entry: res.data }))
            .catch(err => console.log('Failed to Load Entry: ' + err));
    };

    render() {
        const entryId = this.props.match.params.entryId;

        return (
            this.state.entry === null && <div />,
            this.state.entry && (
                <div className='container entry-container'>
                    <div className='entry-content'>
                        <div className='icon'>
                            <Link to='/entries'>
                                <FontAwesomeIcon icon={faChevronUp} size='3x' />
                            </Link>
                        </div>
                        <div className='title'>{this.state.entry.title}</div>
                        {/* <p className='body'>{this.state.entry.body}</p> */}
                        <div className='body'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Hic, itaque quaerat rerum
                                maxime suscipit, beatae dolorum repellendus
                                voluptatem aliquam unde, ipsum sit architecto
                                voluptate.
                            </p>
                            <p>
                                Eligendi ullam porro rem ipsam a! Repellendus
                                repudiandae dolores quis! Atque quisquam error
                                accusamus laboriosam, nam velit? Molestiae
                                neque, ipsam fugit atque porro asperiores,
                                libero facilis omnis mollitia fugiat consequatur
                                ipsum perferendis quas non laudantium
                                distinctio. Explicabo nemo animi officiis
                                deserunt. Rerum repudiandae alias eius excepturi
                                molestiae illo doloremque, corrupti repellat
                                ratione illum perspiciatis dicta ducimus minus
                                voluptates sed soluta cupiditate sapiente cumque
                                odit rem. Magni! Dolor eligendi vel facere odio
                                totam quidem, illum laboriosam quas numquam hic
                                aperiam maiores omnis magnam eaque tenetur
                                accusantium? Praesentium quod nisi odit nesciunt
                                nulla vero beatae accusamus placeat animi.
                            </p>
                            <p>
                                Numquam error corrupti eveniet quae magnam saepe
                                repellat asperiores voluptatem officia natus?
                                Nostrum provident sunt impedit nobis cum quod,
                                explicabo nesciunt a dignissimos eaque
                                temporibus velit recusandae magnam ipsum id.
                                Rerum beatae illum tempora debitis, laborum iure
                                eaque nisi aliquam natus recusandae quidem nam
                                maiores consequuntur hic error fugit excepturi.
                                Amet, reprehenderit esse fuga ducimus quas unde!
                                Animi, repellendus nisi. Optio facere sit vel
                                accusantium aliquam officiis magni doloremque
                                repellat, recusandae, voluptatum in ipsa
                                tempore? Eaque, labore possimus laboriosam
                                praesentium quia id. In accusamus placeat
                                officiis quidem optio! Iste, excepturi.
                            </p>
                            <p>
                                Debitis consequatur est, cumque enim repudiandae
                                reprehenderit voluptatum? Explicabo fugiat
                                doloribus quo, corporis magni omnis, officiis
                                vitae laborum dignissimos non rem nulla fugit,
                                ullam sunt ex nisi laudantium distinctio ut.
                            </p>
                            <p>
                                Fuga maxime minima harum impedit aperiam commodi
                                dignissimos ad, placeat, eveniet, distinctio ut.
                                Officia fugit hic itaque esse deserunt, enim vel
                                ipsa rerum labore qui harum? Enim doloremque
                                ratione vero! Quas sequi, eos repellendus
                                repellat, nulla, dolorem autem magnam fugit
                                voluptatum ipsa ad! Error molestiae totam
                                voluptatum repudiandae, iure excepturi libero
                                cumque reiciendis dignissimos tempora nemo nobis
                                commodi nisi expedita.
                            </p>
                        </div>
                        <div className='icon edit'>
                            <PrivateLink
                                to={`/edits/${entryId}`}
                                body={
                                    <FontAwesomeIcon icon={faEdit} size='1x' />
                                }
                            />
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default Entry;
