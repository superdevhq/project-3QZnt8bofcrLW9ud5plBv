
import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountPrice?: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  studentsCount: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  thumbnail,
  rating,
  reviewCount,
  price,
  discountPrice,
  category,
  level,
  duration,
  studentsCount,
}: CourseCardProps) => {
  return (
    <Link to={`/courses/${id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-2 left-2">{category}</Badge>
        </div>
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{instructor}</p>
          
          <div className="flex items-center">
            <div className="flex items-center text-yellow-500 mr-2">
              {Array(5).fill(0).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(rating) ? "fill-yellow-500" : "fill-muted stroke-muted"}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground ml-1">({reviewCount})</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users size={14} className="mr-1" />
              <span>{studentsCount.toLocaleString()}</span>
            </div>
            <Badge variant="outline">{level}</Badge>
          </div>
          
          <div className="flex items-center pt-2">
            {discountPrice ? (
              <>
                <span className="font-bold text-lg">${discountPrice}</span>
                <span className="text-muted-foreground line-through ml-2">${price}</span>
              </>
            ) : (
              <span className="font-bold text-lg">${price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
