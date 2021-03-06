import Cards, { Card } from 'react-swipe-card'
import React from 'react'
 
const data = ['Alexandre', 'Thomas', 'Lucien']
 
class Wrapper extends React.Component {
    render(){
        return (
            <Cards onEnd={action('end')} className='master-root'>
              {data.map(item => 
                <Card 
                  onSwipeLeft={action('swipe left')} 
                  onSwipeRight={action('swipe right')}>
                  <h2>{item}</h2>
                </Card>
              )}
            </Cards>
        )

    }

}

export default Wrapper;
