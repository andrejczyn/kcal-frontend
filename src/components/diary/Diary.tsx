import * as React from "react";
import * as lunch from './lunch.jpg'
import * as breakfast from './breakfast.jpg'
import * as dinner from './dinner.jpg'
import {AddToDiaryForm} from "./AddToDiaryForm";
import {ProductsService} from "../../services/Services";

interface DiaryProps {
    productsService: ProductsService;
}

export function Diary(props: DiaryProps) {
    return (<>
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Diary</h1>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={breakfast.default}/>
                    <div className="card-body">
                        <h5 className="card-title">Breakfast</h5>
                        <AddToDiaryForm productService={props.productsService} />
                        <ul className="list-group">
                            <li className="list-group-item">Owsianka</li>
                            <li className="list-group-item">Jogurt</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={lunch.default}/>
                    <div className="card-body">
                        <h5 className="card-title">Lunch</h5>
                        <AddToDiaryForm productService={props.productsService} />
                        <ul className="list-group">
                            <li className="list-group-item">Schabowy</li>
                            <li className="list-group-item">Ziemniaki</li>
                            <li className="list-group-item">Buraczki</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src={dinner.default}/>
                    <div className="card-body">
                        <h5 className="card-title">Dinner</h5>
                        <AddToDiaryForm productService={props.productsService} />
                        <ul className="list-group">
                            <li className="list-group-item">Tost</li>
                            <li className="list-group-item">Jogurt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}