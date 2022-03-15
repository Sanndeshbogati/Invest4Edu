import React, { Component } from "react";
import './mutualFundCategory.css'
// import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const myData = [
    {
      id: "1",
      nameHeader: "Header1",
      subMenu: [{ id: "1", name: "subMenu1" }, { id: "2", name: "subMenu2" }]
    },
    {
      id: "2",
      nameHeader: "Header2",
      subMenu: [{ id: "1", name: "subMenu1" }, { id: "2", name: "subMenu2" }]
    }
  ];

class FAQ extends Component{   
    // state = { settings: [{ id: "1", open: false }, { id: "2", open: false }] };

    // handleClick = id => {
    //     this.setState(state => ({
    //       ...state,
    //       settings: state.settings.map(item =>
    //         item.id === id ? { ...item, open: !item.open } : item
    //       )
    //     }));
    //   };

	
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //       menu: false
    //     };
    //     this.toggleMenu = this.toggleMenu.bind(this);
    //   }
    
    //   toggleMenu(){
    //     this.setState({ menu: !this.state.menu })
    //   }

  render() {
    // const show = (this.state.menu) ? "show" : "" ;
	// const { settings } = this.state;
    return (
        
        <div>

        <section className="faq_section page-title">
        <div className="container">
            <div className="row">
                <div className="faq_section col-sm-8 m-auto text-center">
                    {/* <!-- Page Title --> */}
                    <h1>FAQs on demand</h1>
                    {/* <!-- Page Description --> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, beatae atque dolorum impedit provident veritatis inventore similique deserunt suscipit quae.</p>
                </div>
            </div>
        </div>
    </section>
{/* 
	<div style={{ marginRight: "15px" }}>
        <List component="nav">
          {myData.map(each => (
            <React.Fragment key={each.id}>
              <ListItem button onClick={() => this.handleClick(each.id)}>
                <ListItemText inset primary={each.nameHeader} />
                {settings.find(item => item.id === each.id).open
                  ? "expanded"
                  : "collapsed"}
              </ListItem>
              <Divider />
              <Collapse
                in={settings.find(item => item.id === each.id).open}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {each.subMenu.map(subData => (
                    <ListItem key={subData.id} button>
                      <ListItemText inset primary={subData.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </div> */}

    <section className="faq section pt-0">
	<div className="container">
		<div className="row">
			<div className="col-lg-10 m-auto">
				<div className="block shadow">
					{/* <!-- Getting Started --> */}
					<div className="faq-item">
						{/* <!-- Title --> */}
						<div className="faq-item-title">
							<h2>
								Getting Started
							</h2>
						</div>
						{/* <!-- Get Started Accordion --> */}
						<div id="gstAccordion" data-children=".item">
							{/* <!-- Accordion Item 01 --> */}
							<div className="item">
								<div className="item-link">
                                    
									<a data-toggle="collapse" data-target="#gstAccordion1"
									//  onClick={this.toggleMenu}
									 >
										What should I do if I want to see how a prototype created with ProtoPie runs on a mobile device?
									</a>
								</div>
								<div data-toggle="collapse" id="gstAccordion1"
								// className={"collapse accordion-block " + show}
								>
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 02 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#gstAccordion" href="#gstAccordion2"
									//  onClick={ this.toggleMenu }
									 >
										What devices are supported for Android Instant Apps?
									</a>
								</div>
								<div id="gstAccordion2" 
								// className={"collapse accordion-block " + show}
								>
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 03 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#gstAccordion" href="#gstAccordion3">

										What countries are Android Instant Apps supported in?
									</a>
								</div>
								<div id="gstAccordion3" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 04 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#gstAccordion" href="#gstAccordion4">
										Do developers need to build two different Android apps now?
									</a>
								</div>
								<div id="gstAccordion4" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 05 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#gstAccordion" href="#gstAccordion5">
										What Android APIs and functionality can instant apps use?
									</a>
								</div>
								<div id="gstAccordion5" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 06 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#gstAccordion" href="#gstAccordion6">
										Can users choose to install the app permanently?
									</a>
								</div>
								<div id="gstAccordion6" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Account Accordion --> */}
					<div className="faq-item">
						{/* <!-- Title --> */}
						<div className="faq-item-title">
							<h2>
								Account
							</h2>
						</div>
						{/* <!-- Account Accordion --> */}
						<div id="accountAccordion" data-children=".item">
							{/* <!-- Accordion Item 01 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#accountAccordion" href="#accountAccordion1">
										What devices are supported for Android Instant Apps?
									</a>
								</div>
								<div id="accountAccordion1" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 02 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#accountAccordion" href="#accountAccordion2">
										What countries are Android Instant Apps supported in?
									</a>
								</div>
								<div id="accountAccordion2" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 03 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#accountAccordion" href="#accountAccordion3">
										Do developers need to build two different Android apps now?
									</a>
								</div>
								<div id="accountAccordion3" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 04 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#accountAccordion" href="#accountAccordion4">
										What Android APIs and functionality can instant apps use?
									</a>
								</div>
								<div id="accountAccordion4" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 05 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#accountAccordion" href="#accountAccordion5">
										Can users choose to install the app permanently?
									</a>
								</div>
								<div id="accountAccordion5" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Pricing & License Accordion --> */}
					<div className="faq-item">
						{/* <!-- Title --> */}
						<div className="faq-item-title">
							<h2>
								Pricing &amp; License
							</h2>
						</div>
						{/* <!-- Account Accordion --> */}
						<div id="plAccordion" data-children=".item">
							{/* <!-- Accordion Item 01 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#plAccordion" href="#plAccordion1">
										Where can I see the licenses that I bought?
									</a>
								</div>
								<div id="plAccordion1" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 02 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#plAccordion" href="#plAccordion2">
										Am I unable to continue using if my license expires?
									</a>
								</div>
								<div id="plAccordion2" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 03 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#plAccordion" href="#plAccordion3">
										How many websites can I tie to one license?
									</a>
								</div>
								<div id="plAccordion3" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 04 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#plAccordion" href="#plAccordion4">
										Do you have volume purchase programs?
									</a>
								</div>
								<div id="plAccordion4" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
							{/* <!-- Accordion Item 05 --> */}
							<div className="item">
								<div className="item-link">
									<a data-toggle="collapse" data-parent="#plAccordion" href="#plAccordion5">
										Are there any educational pricing or discounts?
									</a>
								</div>
								<div id="plAccordion5" className="collapse accordion-block">
									<p>
										Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Getting Started Accordion --> */}
				</div>
			</div>
		</div>
	</div>
</section>

        
        </div>

    

    );
  }
}

export default FAQ