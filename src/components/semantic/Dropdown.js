import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { countries } from './common/countries';

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options1 = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', value: 'profile', text: 'Your Profile' },
  { key: 'stars', value: 'stars', text: 'Your Stars' },
  { key: 'explore', value: 'explore', text: 'Explore' },
  { key: 'integrations', value: 'integrations', text: 'Integrations' },
  { key: 'help', value: 'help', text: 'Help' },
  { key: 'settings', value: 'settings', text: 'Settings' },
  { key: 'sign-out', value: 'sign-out', text: 'Sign Out' },
]

const stateOptions = [
  { key: 'bs', value: 'bs', text: 'Beer Sheva' },
  { key: 'ha', value: 'ha', text: 'Haifa' },
  { key: 'he', value: 'he', text: 'Hertzeliya' },
  { key: 'je', value: 'je', text: 'Jerusalem' },
  { key: 'ne', value: 'ne', text: 'Netanya' },
  { key: 'ta', value: 'ta', text: 'Tel Aviv' }
];

const options2 = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' }
]

const DropdownExampleSearchSelectionTwo = () => (
  <div>
    <div className="padd">
      <Dropdown placeholder='State' search selection options={stateOptions} />
    </div>
    <div className="padd">
      <Dropdown placeholder='Skills' fluid multiple selection options={options1} />
    </div>
    <div className="padd">
      <Dropdown trigger={trigger} options={options2} />
    </div>
    <div className="padd">
      <Dropdown placeholder='Select Country' fluid multiple search selection options={countries.map((country) => ({ key: country.countryCode, flag: country.countryCode, value: country.countryCode, text: country.name }))} />
    </div>
  </div>
)

export default DropdownExampleSearchSelectionTwo
