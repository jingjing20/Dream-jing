import * as React from 'react';
import { MemberEntity } from '../model';
import '../style/jing.css'

class MemberRow extends React.Component<{ member: MemberEntity }> {
  constructor(props) {
    super(props)
  }
  render() {
    const member = this.props.member;
    return (
      <tr>
        <td><img src={member.avatar_url} alt="" /></td>
        <td>{member.id}</td>
        <td>{member.login}</td>
      </tr>
    )
  }
}
export default MemberRow;